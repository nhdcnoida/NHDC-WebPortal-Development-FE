"use client"
import { useParams } from "next/navigation"
import { User } from "lucide-react"
import Image from "next/image"

const Node = ({ title, name, image, children, noConnector = false }) => {
  const { lang } = useParams()
  const displayTitle = lang === "hi" ? title.hi : title.en
  const displayName = lang === "hi" ? name.hi : name.en

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 border border-gray-400 rounded shadow-sm w-28 min-h-[55px] p-1 sm:w-26 sm:min-h-[60px] md:w-34 md:min-h-[45px] lg:w-66 lg:min-h-[85px] lg:p-5">
        <div className="flex flex-col items-center">
          {image ? (
            <Image height={1000} width={1000}
              src={image || "/placeholder.svg"}
              alt={displayName || displayTitle}
              className="h-3 w-3 rounded-full object-cover mb-0.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-7 lg:w-7"
            />
          ) : (
            <User className="h-3 w-3 text-gray-500 mb-0.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
          )}
          <p className="text-[8px]  md:text-justify font-bold leading-tight  md:text-nowrap mt-0.5 sm:text-[8px] md:text-[9px] lg:text-sm">{displayName}</p>
                    <p className="text-[7px]  md:text-justify leading-tight md:text-nowrap  sm:text-[9px] md:text-[10px] lg:text-sm">{displayTitle}</p>

        </div>
      </div>

      {children && !noConnector && (
        <div className="mt-1 flex flex-col items-center">
          <div className="h-4 w-0.5 bg-gray-400" />
          <div className="flex justify-center mt-1 space-x-1 flex-row">{children}</div>
        </div>
      )}

      {children && noConnector && <div className="flex justify-center space-x-1 flex-row">{children}</div>}
    </div>
  )
}

export default function MobileOrgChart() {
  return (
    <div className="p-1 bg-white min-h-screen overflow-x-auto">
      <div className="flex flex-col items-center w-full">
        {/* Chairman */}
        <Node
          title={{ en: "Chairman", hi: "अध्यक्ष" }}
          name={{ en: "Dr. M. Beena, DC (Handloom)", hi: "डॉ. एम. बीना, डीसी (हैंडलूम)" }}
          image="/assets/beena.jpg"
        >
          {/* Managing Director */}
          <Node
            title={{ en: "Managing Director", hi: "प्रबंध निदेशक" }}
            name={{ en: "Commodore Rajiv Ashok (Retd.)", hi: "कमोडोर राजीव अशोक (सेवानिवृत्त)" }}
            image="/assets/rajiv.jpg"
          >
            <div className="flex space-x-1 sm:space-x-2 md:space-x-4 flex-row mt-5">
              {/* ED Commercial */}



              <Node
                title={{ en: "ED (Commercial)", hi: "कार्यकारी निदेशक (वाणिज्यिक)" }}
                name={{ en: "(Vacant)", hi: "(रिक्त)" }}
              >
                <Node title={{ en: "General Manager", hi: "महाप्रबंधक" }} name={{ en: "(Vacant)", hi: "(रिक्त)" }}>
                  <Node
                    title={{ en: "DGM (Commercial)", hi: "उप महाप्रबंधक (वाणिज्यिक)" }}
                    name={{ en: "Sh. Sanjay Kumar Joshi", hi: "श्री संजय कुमार जोशी" }}
                    image="/assets/sanjay.png"
                  >
                    <Node
                      title={{ en: "Sr. Manager (Comm.)", hi: "वरिष्ठ प्रबंधक (संचार)" }}
                      name={{ en: "Sh. Nilesh Sukhadev", hi: "श्री निलेश सुखदेव" }}
                      image="/assets/nilesh.jpeg"
                    />
                  </Node>
                </Node>
              </Node>



 <Node
                title={{ en: "ED (Finance) & CS", hi: "कार्यकारी निदेशक (वित्त)" }}
                name={{ en: "Sh. Dhirender Prakash", hi: "श्री धिरेन्द्र प्रकाश" }}
                image="/assets/shri_dhirender.png"
                
              >
                <Node title={{ en: "GM(F&A) & Legal Head (Addl.Charge)", hi: "GM(F&A) & Legal Head (Addl.Charge)" }}
                    name={{ en: "Sh. Jitendra Purohit", hi: "श्री जितेन्द्र पुरोहित" }}
                    image="/assets/jitendra_purohit.jpg">
                  <Node
                    title={{ en: "DGM (Commercial)", hi: "उप महाप्रबंधक (वाणिज्यिक)" }}
                    name={{ en: "(Vacant)", hi: "(रिक्त)" }}
                    // image="/assets/sanjay.png"
                  >
                    <Node
                       title={{ en: "Sr. Manager (F&A)", hi: "वरिष्ठ प्रबंधक (वित्त और लेखा)" }}
                      name={{ en: "Ms. Pooja Sharma", hi: "सुश्री पूजा शर्मा" }}
                      image="/assets/pooja.jpeg"
                    />
                  </Node>
                </Node>
              </Node>

              {/* ED Finance
              <Node
                title={{ en: "ED (Finance) & CS", hi: "कार्यकारी निदेशक (वित्त)" }}
                name={{ en: "Sh. Dhirender Prakash", hi: "श्री धिरेन्द्र प्रकाश" }}
                image="/assets/shri_dhirender.png"
                noConnector={true}
              >
                <div className="flex flex-col items-center">
                  <div className="h-24.5 w-0.5 bg-gray-400 my-1 sm:h-10 sm:my-2 md:h-23 md:my-2 lg:h-33 lg:my-2" />
                  <Node
                    title={{ en: "GM(F&A) & Legal Head (Addl.Charge)", hi: "GM(F&A) & Legal Head (Addl.Charge)" }}
                    name={{ en: "Sh. Jitendra Purohit", hi: "श्री जितेन्द्र पुरोहित" }}
                    image="/assets/jitendra_purohit.jpg"
                  >
                    <Node
                      title={{ en: "Sr. Manager (F&A)", hi: "वरिष्ठ प्रबंधक (वित्त और लेखा)" }}
                      name={{ en: "Ms. Pooja Sharma", hi: "सुश्री पूजा शर्मा" }}
                      image="/assets/pooja.jpeg"
                    />
                  </Node>
                </div>
              </Node> */}

              {/* HR Department with special connector */}
              <div className="flex flex-col items-center">
                <div className="h-39.5 w-0.5 bg-gray-400 mb-1 sm:h-16 sm:mb-2 md:h-40 md:mb-2 lg:h-62 lg:mb-2" />
                <Node
                  title={{ en: "DGM (HR)", hi: "उप महाप्रबंधक (मानव संसाधन)" }}
                  name={{ en: "Dr. Prasanna M.", hi: "डॉ. प्रसन्ना एम." }}
                  image="/assets/dhirender.png"
                >
                  <Node
                    title={{ en: "Sr. Manager (IT)", hi: "वरिष्ठ प्रबंधक (आईटी)" }}
                    name={{ en: "Sh. Ashok Gupta", hi: "श्री अशोक गुप्ता" }}
                    image="/assets/ashok_sir.jpeg"
                  />
                </Node>
              </div>

              {/* CVO */}
              <Node
                title={{ en: "CVO", hi: "मुख्य सतर्कता अधिकारी" }}
                name={{ en: "Ms. Akanksha Sharma, IRSS", hi: "सुश्री आकांक्षा शर्मा, आईआरएसएस" }}
                        image="/assets/cvo.jpeg"
              />
            </div>
          </Node>
           <div className="h-0.5 w-80 bg-gray-400 mb-4 absolute mt-21 md:w-110 md:mt-24 lg:w-190 lg:mt-33" />
       <div className="h-3 w-0.5 bg-gray-400 mb-4 absolute mt-21 md:mr-110 mr-80 md:mt-24 lg:mr-191 lg:mt-33 " /> 
       <div className="h-3 w-0.5 bg-gray-400 mb-4 absolute mt-21 ml-79 md:ml-109 md:mt-24 lg:ml-189 lg:mt-33 " /> 
        </Node>
      </div>
    </div>
  )
}