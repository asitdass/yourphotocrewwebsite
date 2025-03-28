import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Camera, Users, Calendar, QrCode as Qr, Home, ChevronDown, ChevronUp, Heart, Share2, Download } from 'lucide-react';

// interface Category {
//   id: string;
//   name: string;
//   subcategories: SubCategory[];
// }

// interface SubCategory {
//   id: string;
//   name: string;
//   images: Image[];
// }

// interface Image {
//   id: string;
//   url: string;
//   title: string;
//   category: string;
//   subcategory: string;
//   likes: number;
// }

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState(['all']);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    {
      id: 'all',
      name: 'All',
      subcategories: [{ id: 'all', name: 'All', images: [] }]
    },
    {
      id: 'scheduled',
      name: 'Scheduled Shoot',
      subcategories: [
        { id: 'couple', name: 'Couple section', images: [] },
        { id: 'female', name: 'Female section', images: [] },
        { id: 'portfolio', name: 'Business Profile Shots', images: [] },
        { id: 'male', name: 'male casual portraits', images: [] }
      ]
    },
    {
      id: 'college',
      name: 'College Fests',
      subcategories: [
        { id: 'tech', name: 'Tech Fest', images: [] },
        { id: 'cultural', name: 'Cultural Fest', images: [] },
        { id: 'sports', name: 'Sports Meet', images: [] }
      ]
    },
    {
      id: 'qr',
      name: 'Live QR Booking',
      subcategories: [
        { id: 'cafe', name: 'Cafe Shoots', images: [] },
        { id: 'street', name: 'Street Photography', images: [] },
        { id: 'events', name: 'Event Coverage', images: [] }
      ]
    },
    {
      id: 'family',
      name: 'Family Events',
      subcategories: [
        { id: 'wedding', name: 'Wedding', images: [] },
        { id: 'thread', name: 'Thread Ceremony', images: [] },
        { id: 'puja', name: 'Puja', images: [] }
      ]
    }
  ];

  const images = [
    {
      id: '1',
      url: '/assets/gallery/couplesection/couple-1.jpg',
      title: 'Couple Section',
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '2',
      url: '/assets/gallery/couplesection/couple-2.jpg',
      title: 'Couple Section',
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '3',
      url: '/assets/gallery/couplesection/couple-3.jpg',
      title: 'Couple Section',
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '4',
      url: '/assets/gallery/couplesection/couple-4.jpg',
      title: 'Couple Section',
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '5',
      url: '/assets/gallery/couplesection/couple-5.jpg',
      title: 'Couple Section',    
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '6',
      url: '/assets/gallery/couplesection/couple-6.jpg',
      title: 'Couple Section',
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '7',
      url: '/assets/gallery/couplesection/couple-7.jpg',
      title: 'Couple Section',
      category: 'scheduled',
      subcategory: 'couple',
      likes: 245
    },
    {
      id: '8',
      url: '/assets/gallery/female/female-1.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '9',
      url: '/assets/gallery/female/female-2.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '10',
      url: '/assets/gallery/female/female-3.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '11',
      url: '/assets/gallery/female/female-4.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '12',
      url: '/assets/gallery/female/female-5.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '13',
      url: '/assets/gallery/female/female-6.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '14',
      url: '/assets/gallery/female/female-7.jpg',
      title: 'Female Section',
      category: 'scheduled',
      subcategory: 'female',
      likes: 245
    },
    {
      id: '15',
      url: '/assets/gallery/male/male-1.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '16',
      url: '/assets/gallery/male/male-2.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '17',
      url: '/assets/gallery/male/male-3.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '18',
      url: '/assets/gallery/male/male-4.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '19',
      url: '/assets/gallery/male/male-5.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '20',
      url: '/assets/gallery/male/male-6.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '21',
      url: '/assets/gallery/male/male-7.jpg',
      title: 'Male Section',
      category: 'scheduled',
      subcategory: 'male',
      likes: 245
    },
    {
      id: '22',
      url: '/assets/gallery/businessprofile/businessprofile-1.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled',
      subcategory: 'portfolio',
      likes: 245
    },
    {
      id: '23',
      url: '/assets/gallery/businessprofile/businessprofile-2.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled',
      subcategory: 'portfolio',
      likes: 245
    },
    {
      id: '24',
      url: '/assets/gallery/businessprofile/businessprofile-3.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled',
      subcategory: 'portfolio',
      likes: 245
    },
    {
      id: '25',
      url: '/assets/gallery/businessprofile/businessprofile-4.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled', 
      subcategory: 'portfolio',
      likes: 245
    },
    {
      id: '26',
      url: '/assets/gallery/businessprofile/businessprofile-5.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled',
      subcategory: 'portfolio',
      likes: 245
    },
    {
      id: '27',
      url: '/assets/gallery/businessprofile/businessprofile-6.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled',
      subcategory: 'portfolio',
      likes: 245
    },
    {
      id: '28',
      url: '/assets/gallery/businessprofile/businessprofile-7.jpg',
      title: 'Business Profile Shots',
      category: 'scheduled',
      subcategory: 'portfolio',
      likes: 245
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filterImages = () => {
    return images.filter(image => {
      if (selectedCategory === 'all') return true;
      if (selectedSubCategory === 'all') return image.category === selectedCategory;
      return image.category === selectedCategory && image.subcategory === selectedSubCategory;
    });
  };

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'scheduled': return <Camera className="w-5 h-5" />;
      case 'college': return <Users className="w-5 h-5" />;
      case 'qr': return <Qr className="w-5 h-5" />;
      case 'family': return <Home className="w-5 h-5" />;
      default: return <Filter className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-quaternary mt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h1>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Explore our diverse collection of photographic memories
            </p>
          </div> */}

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
                {/* <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </h3> */}
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="space-y-1">
                      <button
                        onClick={() => {
                            toggleCategory(category.id);
                            category.id === 'all' && setSelectedCategory(category.id);
                            // setSelectedSubCategory(category.id === 'all' ? 'all' : category.subcategories[0].id);
                        }}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors text-primary ${
                          selectedCategory === category.id
                            ? 'bg-secondary text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(category.id)}
                          <span>{category.name}</span>
                        </div>
                        {category.id !== 'all' && (
                          expandedCategories.includes(category.id)
                            ? <ChevronUp className="w-4 h-4" />
                            : <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedCategories.includes(category.id) && category.id !== 'all' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-4"
                          >
                            {category.subcategories.map(sub => (
                              <button
                                key={sub.id}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setSelectedSubCategory(category.id === 'all' ? 'all' : sub.id);
                                }}
                                className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                                  selectedCategory === category.id && selectedSubCategory === sub.id
                                    ? 'text-secondary font-medium'
                                    : 'text-gray-600 hover:text-primary'
                                }`}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterImages().map((image) => (
                  <motion.div
                    key={image.id}
                    layoutId={`image-${image.id}`}
                    className="relative group"
                    onMouseEnter={() => setHoveredImage(image.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Overlay */}
                      {/* <AnimatePresence>
                        {hoveredImage === image.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col justify-end p-4 text-white"
                          >
                            <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <button className="hover:text-secondary transition-colors">
                                  <Heart className="w-5 h-5" />
                                </button>
                                <button className="hover:text-secondary transition-colors">
                                  <Share2 className="w-5 h-5" />
                                </button>
                                <button className="hover:text-secondary transition-colors">
                                  <Download className="w-5 h-5" />
                                </button>
                              </div>
                              <span className="text-sm">{image.likes} likes</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;