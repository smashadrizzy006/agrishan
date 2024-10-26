import { useState } from 'react';
import content from '../data/content.json';
import { Save } from 'lucide-react';

const Admin = () => {
  const [data, setData] = useState(content);
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Content updated successfully!');
      } else {
        setMessage('Failed to update content.');
      }
    } catch (error) {
      setMessage('Error updating content.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <Save size={20} />
              <span>Save Changes</span>
            </button>
          </div>

          {message && (
            <div className={`p-4 rounded-lg mb-6 ${
              message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Company Information</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    value={data.company.name}
                    onChange={(e) => setData({
                      ...data,
                      company: { ...data.company, name: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tagline</label>
                  <input
                    type="text"
                    value={data.company.tagline}
                    onChange={(e) => setData({
                      ...data,
                      company: { ...data.company, tagline: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Projects</h2>
              {data.projects.map((project, index) => (
                <div key={project.id} className="border rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index] = { ...project, title: e.target.value };
                          setData({ ...data, projects: newProjects });
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = [...data.projects];
                          newProjects[index] = { ...project, description: e.target.value };
                          setData({ ...data, projects: newProjects });
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
              {data.testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="border rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        value={testimonial.name}
                        onChange={(e) => {
                          const newTestimonials = [...data.testimonials];
                          newTestimonials[index] = { ...testimonial, name: e.target.value };
                          setData({ ...data, testimonials: newTestimonials });
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Content</label>
                      <textarea
                        value={testimonial.content}
                        onChange={(e) => {
                          const newTestimonials = [...data.testimonials];
                          newTestimonials[index] = { ...testimonial, content: e.target.value };
                          setData({ ...data, testimonials: newTestimonials });
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;