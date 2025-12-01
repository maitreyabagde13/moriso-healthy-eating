import React, { useState, useRef } from 'react';
import { analyzeMessMenu, analyzeMessImage } from '../services/geminiService';
import { MessAnalysisResult } from '../types';
import { Sparkles, AlertCircle, CheckCircle, ChefHat, RefreshCw, Camera, Upload, X, ImageIcon } from 'lucide-react';

const HostelMessOptimiser: React.FC = () => {
  const [menuInput, setMenuInput] = useState('');
  const [imageFile, setImageFile] = useState<{ base64: string, mimeType: string, preview: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MessAnalysisResult | null>(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size should be less than 5MB.');
      return;
    }

    setError('');
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      // Extract base64 data and mime type
      const base64Data = result.split(',')[1];
      setImageFile({
        base64: base64Data,
        mimeType: file.type,
        preview: result
      });
      // Clear text input when image is selected to avoid confusion
      setMenuInput('');
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImageFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleAnalyze = async () => {
    if (!menuInput.trim() && !imageFile) return;
    
    setLoading(true);
    setError('');
    setResult(null);

    try {
      let data: MessAnalysisResult;
      
      if (imageFile) {
        data = await analyzeMessImage(imageFile.base64, imageFile.mimeType);
      } else {
        data = await analyzeMessMenu(menuInput);
      }
      
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze. Please check your connection or try again.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (color: string) => {
    switch (color) {
      case 'Green': return 'bg-green-100 text-green-700 border-green-200';
      case 'Yellow': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Red': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="optimiser" className="py-20 bg-moriso-navy text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-moriso-teal opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-moriso-gold opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 text-moriso-gold" />
            <span className="text-sm font-medium text-moriso-gold uppercase tracking-wider">Signature Tool</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Hostel Mess Optimiser</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stuck with mess food? Upload a photo of the menu or paste the items below. Our AI will identify the healthiest option instantly.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 ml-1">What's on the menu today?</label>
            
            <div className="space-y-4">
              {/* Image Preview Area */}
              {imageFile ? (
                <div className="relative rounded-xl overflow-hidden border-2 border-moriso-teal bg-gray-50 h-48 flex items-center justify-center">
                  <img src={imageFile.preview} alt="Menu Preview" className="h-full w-full object-contain" />
                  <button 
                    onClick={clearImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    title="Remove image"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Image ready for analysis
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <textarea
                    value={menuInput}
                    onChange={(e) => setMenuInput(e.target.value)}
                    placeholder="Type items (e.g., Aloo Paratha, Curd...) OR upload a photo of the menu/food"
                    className="w-full h-32 p-4 pb-14 rounded-xl border-2 border-gray-200 focus:border-moriso-teal focus:ring-0 text-gray-800 resize-none transition-all placeholder:text-gray-400"
                  ></textarea>
                  
                  {/* Action Bar inside Textarea */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                     <input 
                       type="file" 
                       accept="image/*" 
                       className="hidden" 
                       ref={fileInputRef}
                       onChange={handleFileChange}
                     />
                     <button 
                       onClick={() => fileInputRef.current?.click()}
                       className="flex items-center gap-1.5 text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-200 hover:text-moriso-teal transition-colors border border-gray-200"
                     >
                       <Camera className="w-4 h-4" /> Scan Menu
                     </button>
                  </div>
                </div>
              )}

              <button
                  onClick={handleAnalyze}
                  disabled={loading || (!menuInput.trim() && !imageFile)}
                  className="w-full md:w-auto ml-auto bg-moriso-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-moriso-teal disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center justify-center gap-2"
              >
                  {loading ? (
                      <>
                      <RefreshCw className="w-5 h-5 animate-spin" /> Analyzing...
                      </>
                  ) : (
                      <>
                      Analyze {imageFile ? 'Image' : 'Menu'} <Sparkles className="w-5 h-5" />
                      </>
                  )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2 mb-6 border border-red-100">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {result && (
            <div className="animate-fade-in-up">
              <div className="border-t border-gray-100 pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Score Card */}
                  <div className={`flex-1 rounded-2xl p-6 border-2 ${getScoreColor(result.healthScoreColor)} flex flex-col justify-center items-center text-center min-h-[160px]`}>
                    <div className="text-sm font-bold uppercase tracking-wider mb-2 opacity-80">Health Indicator</div>
                    <div className="text-3xl font-bold mb-2">{result.healthScoreColor}</div>
                    <p className="text-sm opacity-90">{result.reasoning}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="flex-[2] grid gap-4">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <div className="flex items-start gap-3">
                            <div className="bg-green-500 rounded-full p-1 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Eat This</h4>
                                <p className="text-green-800 font-semibold text-lg">{result.healthiestOption}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <div className="flex items-start gap-3">
                            <div className="bg-red-500 rounded-full p-1 mt-1">
                                <AlertCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm uppercase mb-1">Avoid / Limit</h4>
                                <p className="text-red-800 font-medium">{result.avoid}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                     <div className="bg-moriso-light p-4 rounded-xl border border-moriso-teal/20">
                        <h4 className="font-bold text-moriso-navy flex items-center gap-2 mb-2">
                            <ChefHat className="w-4 h-4 text-moriso-teal" /> Portion Guide
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{result.portionGuide}</p>
                     </div>
                     <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
                            <RefreshCw className="w-4 h-4 text-gray-500" /> Smart Swaps
                        </h4>
                        <ul className="space-y-1">
                            {result.swaps.map((swap, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                    <span className="text-moriso-teal">•</span> {swap}
                                </li>
                            ))}
                        </ul>
                     </div>
                </div>
              </div>
            </div>
          )}
           
           {!result && !loading && !imageFile && (
             <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
               <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                 <ImageIcon className="w-4 h-4 opacity-50" />
                 Try uploading a photo of your mess menu board!
               </p>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};

export default HostelMessOptimiser;