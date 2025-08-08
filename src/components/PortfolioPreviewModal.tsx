import { X } from 'lucide-react';

interface PortfolioPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: {
    title: string;
    category: string;
    images: string[];
    videos?: string[];
    description: string;
  };
}

export const PortfolioPreviewModal = ({ isOpen, onClose, portfolioData }: PortfolioPreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{portfolioData.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolioData.images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`${portfolioData.title} preview ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                  />
                  <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      View Full Size
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Video Gallery */}
            {portfolioData.videos && portfolioData.videos.length > 0 && (
              <div className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold">Project Videos</h3>
                <div className="grid grid-cols-1 gap-4">
                  {portfolioData.videos.map((video, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden">
                      <video
                        controls
                        className="w-full rounded-lg"
                        src={video}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-400">{portfolioData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 