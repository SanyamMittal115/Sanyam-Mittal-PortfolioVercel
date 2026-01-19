import { motion } from "motion/react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import resumeImage from "figma:asset/6c2f226cb2770893db53d9a21d3d6f659be8e36e.png";

export function Resume() {
  const handleDownload = async () => {
    try {
      // Fetch the image and convert to blob
      const response = await fetch(resumeImage);
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sanyam(Sunny) Mittal resume.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(resumeImage, '_blank');
    }
  };

  return (
    <section id="resume" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl mb-6">Resume</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              View my complete professional background, education, and achievements
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  // Open resume in new tab
                  window.open(resumeImage, '_blank');
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Size
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200"
          >
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm">Sanyam(Sunny) Mittal resume.pdf</span>
            </div>
            
            <div className="p-4 bg-slate-100">
              <img 
                src={resumeImage} 
                alt="Sanyam (Sunny) Mittal Resume" 
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-slate-600 text-sm">
              Last updated: January 2026 • 
              <a 
                href="mailto:smittal303@gatech.edu" 
                className="text-blue-600 hover:underline ml-1"
              >
                Request updated version
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}