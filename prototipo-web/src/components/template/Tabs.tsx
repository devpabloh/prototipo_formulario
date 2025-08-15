import { useState } from "react"

interface TabProps{
  label: string,
  content: React.ReactNode
}

interface TabsComponentProps{
  tabs: TabProps[]
}

export function Tabs({tabs}: TabsComponentProps){
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  return(
    <div className="max-w-7xl mx-auto">
      <div className="flex border-b border-gray-300" role="tablist" aria-label="Abas de navegação">
        {tabs.map((tab, index)=>{
          const isActive = index === activeTabIndex
          return(
            <button
            key={tab.label}
            onClick={()=> setActiveTabIndex(index)}
            role="tab"
            id={`tab-${index}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${index}`}
            className={`py-2 px-4 font-medium text-sm transition-colors duration-200
                ${isActive
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-blue-600 hover:cursor-pointer'
                }
            `}
            >{tab.label}</button>
          )
        })}
      </div>
      <div
        className="p-4 bg-white rounded-b-lg shadow-md "
        role="tabpanel"
        id={`tabpanel-${activeTabIndex}`}
        aria-labelledby={`tab-${activeTabIndex}`}
      >
        {tabs.length > 0 ? tabs[activeTabIndex].content : <span>Nenhuma aba disponível</span>}
      </div>
    </div>
  )
}