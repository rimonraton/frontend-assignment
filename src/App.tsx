import { useState } from 'react'
import './App.css'

interface PageItem {
  id: string;
  label: string;
  checked: boolean;
}

function App() {
  const [allPages, setAllPages] = useState(false);
  const [pages, setPages] = useState<PageItem[]>([
    { id: "page1", label: "Page 1", checked: false },
    { id: "page2", label: "Page 2", checked: false },
    { id: "page3", label: "Page 3", checked: false },
    { id: "page4", label: "Page 4", checked: false },
    { id: "page5", label: "Page 5", checked: false },
    { id: "page6", label: "Page 6", checked: false },
  ]);

  const handleAllPagesChange = () => {
    const newCheckedState = !allPages;
    setAllPages(newCheckedState);
    setPages(pages.map((page) => ({ ...page, checked: newCheckedState })));
  };

  const handlePageChange = (id: string) => {
    const newPages = pages.map((page) =>
      page.id === id ? { ...page, checked: !page.checked } : page
    );
    setPages(newPages);
    const allOthersChecked = newPages.every((page) => page.checked);
    setAllPages(allOthersChecked);
  };

  return (
    <div className='flex justify-center bg-black w-full h-screen'>
      <div className="w-[578px] h-[794px] flex justify-center items-start pt-20 mx-auto bg-white">
        <div className="w-[370px] h-[330px] rounded-md bg-white shadow-[0px_8px_15px_rgba(20,20,20,0.12),0px_0px_4px_rgba(20,20,20,0.1)] py-2">
          <div className="flex flex-col h-full">
            {/* All pages - Fixed at top */}
            <div className='px-3'>
              <div className="px-3">
                <label htmlFor="all-pages" className="flex items-center justify-between py-2 cursor-pointer group">
                  <span className="text-[14px]">
                    All pages
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="all-pages"
                      checked={allPages}
                      onChange={handleAllPagesChange}
                      className="peer sr-only"
                    />
                    <div className="w-[23px] h-[23px] rounded-md border border-gray-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors">
                      {allPages && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="scale-100">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 pointer-events-none">
                      {!allPages && (
                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" className="scale-100">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </label>
              </div>
              <div className="w-full h-px bg-gray-300 my-2"></div>
            </div>

            {/* Scrollable pages list */}
            <div className="flex-1 flex flex-col px-6 overflow-y-auto scrollbar-hide">
              {pages.map((page) => (
                <label key={page.id} htmlFor={page.id} className="flex items-center justify-between py-2.5 cursor-pointer group">
                  <span className="text-[14px]">
                    {page.label}
                  </span>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={page.id}
                      checked={page.checked}
                      onChange={() => handlePageChange(page.id)}
                      className="peer sr-only"
                    />
                    <div className="w-[23px] h-[23px] rounded-md border border-gray-200 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors">
                      {page.checked && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="scale-100">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 pointer-events-none">
                      {!page.checked && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="scale-100">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            <div className='m-2.5'>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <div className="p-3">
              <button className="w-full h-10 bg-[#FFCE22] hover:bg-[#FFD84D] rounded text-[14px] shadow-none border-none cursor-pointer">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default App
