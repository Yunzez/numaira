"use client";
import React from "react";
import styled from "styled-components";
import Colors from "../../colors";
import formats from "../../formats";
import CopySVG from "../../asset/copy.svg";
import { StyledButtonWhite } from "../../components/styled/StyledButtonWhite";

const ContactCard = styled.div`
  width: 610px;
  height: 398px;
  background: ${Colors.neutral50};
  display: flex;
  align-items: flex-start;
`;

const page = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-12">
          <div
            className="flex flex-col items-start"
            style={{ marginLeft: "9%", marginTop: "3%" }}
          >
            <div
              style={{
                color: Colors.primary,
                fontSize: formats.displayLG,
                fontWeight: "600",
              }}
            >
              Contact Us
            </div>
            <div
              style={{
                color: Colors.neutral1000,
                fontWeight: "300",
                marginTop: "8px",
              }}
            >
              We're here to help answer questions about Numaira’s digital
              software solutions, services, and offerings.
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <ContactCard
              className="justify-center items-center h-72"
              // style={{ marginTop: "20px" }}
            >
              <div className="flex flex-col gap-2 items-start justify-center">
                <div
                  style={{
                    color: Colors.primary,
                    fontSize: formats.displayMD,
                    marginTop: "60px",
                  }}
                >
                  Call Us
                </div>
                <div
                  style={{
                    fontSize: formats.displaySM,
                    fontWeight: "600",
                    color: Colors.neutral1000,
                  }}
                >
                  +852 5644 7891
                </div>
                <div style={{ fontWeight: "300", fontSize: formats.textSM }}>
                  9:00-17:30 (MOM 8:00-17:00)
                </div>
                <div
                  className="flex flex-col w-96 items-start absolute"
                  style={{ marginTop: "30px" }}
                >
                  <div style={{ color: Colors.neutral700 }}>
                    Find a phone number near you
                  </div>
                  <div className="w-96 mt-2">
                    <button
                      type="button"
                      className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                    >
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">Tom Cook</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>

                    <ul
                      className=" z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-option-3"
                    >
                      <li
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                        id="listbox-option-0"
                        role="option"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal">
                            Asia-Pacific
                          </span>
                        </div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </li>
                      <li
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                        id="listbox-option-0"
                        role="option"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal">
                            EMEA
                          </span>
                        </div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </li>
                      <li
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                        id="listbox-option-0"
                        role="option"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal">
                            Americas
                          </span>
                        </div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ContactCard>
            <ContactCard
              className="justify-center items-center"
              // style={{ marginTop: "20px" }}
            >
              <div className="flex flex-col items-start justify-center gap-2">
                <div
                  style={{
                    color: Colors.primary,
                    fontSize: formats.displayMD,
                    marginTop: "60px",
                  }}
                >
                  Email Us
                </div>
                <div
                  className="flex flex-col items-start"
                  style={{ color: Colors.neutral700, fontSize: formats.textSM }}
                >
                  <p>
                    Have questions about Numaira? Get answers within 1 business
                  </p>
                  <p>day by sending a message to:</p>
                </div>
                <StyledButtonWhite style={{ marginTop: "30px" }}>
                  <div className="flex flex-row h-8 w-56">
                    <CopySVG width={30} height={30} />
                    <div style={{ fontSize: formats.textLG }}>
                      numairaai@proton.me
                    </div>
                  </div>
                </StyledButtonWhite>
              </div>
            </ContactCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
