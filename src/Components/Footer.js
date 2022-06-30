import { GlobeAltIcon } from "@heroicons/react/solid";
import React from "react";

export const Footer=()=> {
    return (
        <div className="grid bg-gray-100 md:cols-1 xl:grid-cols-2 gird-cols-1 gap-2 md:gap-10 px-0 md:px-32 py-3">
       
            <div className="items-center font-[300] justify-center xl:justify-start grid md:flex">
             
              <h6 className="">© 2021 Airbnb, Inc. All rights reserved</h6>
            
              <ul className="flex">
                <li className="mx-6 list-disc">
                  <p>Privacy</p>
                </li>
                <li className="mx-4 list-disc">
                  <p>Terms</p>
                </li>
                <li className="mx-4 list-disc">
                  <p>Sitemap</p>
                </li>
              </ul>
            </div>
            <div className="flex justify-center xl:justify-end items-center">
              <div className="d-flex items-center mr-3 ">
                <p  className="flex">
                 <GlobeAltIcon className="h-5 mr-2 text-gray-500"/>
                  English (US)
                </p>
              </div>
              <div className="flex mr-2 text-gray-500">
                <span className="mr-2">$</span>
                <p>USD</p>
              </div>
           
            </div>
          </div>
     
    );
}
