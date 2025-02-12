"use client";
import { AdminMenuItems } from "@/constants/admin/AdminRoutes";
import React, { useState } from "react";
import Link from "next/link";
import logo from "@/assets/svg/Frame 10.svg";
import Image from "next/image";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <>
      {/* Sidebar for Large Screens */}
      <div
        className="offcanvas-lg offcanvas-start shadow-sm"
        id="sidebar"
        tabIndex={-1}
        style={{ minWidth: "288px" }}
      >
        {/* Sidebar Header */}
        <div
          className="offcanvas-body d-flex justify-content-between align-items-center"
          style={{ paddingLeft: "15px", paddingTop: "15px" }}
        >
          <div
            className="border"
            style={{
              width: "90%",
              borderRadius: "16px",
              paddingBottom: "16px",
              paddingTop: "16px",
            }}
          >
            <div className="d-flex gap-2 align-items-center justify-content-center">
              <Image src={logo} alt="logo" height={36} width={36} />
              <p style={{ color: "#121212", fontWeight: 500 }}>
                E learning app
              </p>
            </div>
          </div>
          {/* Close Button for Medium Screens */}
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            className="btn-close d-md-block d-lg-none"
          >
            <i className="bi bi-close h4"></i>
          </button>
        </div>

        {/* Sidebar Body */}
        <div
          className="offcanvas-body"
          style={{ paddingLeft: "15px", paddingTop: "15px" }}
        >
          <div className="list-group" style={{ width: "90%" }}>
            {AdminMenuItems.map((item, index) => {
              const isMenuOpen = openMenu === item.label;

              return (
                <div key={index}>
                  {item.subMenu ? (
                   // TODO make the div rounded  
                    <div className="mt-2">
                     {/* Parent menu with dropdown functionality */}
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="list-group-item text-dark border-0 w-full d-flex align-items-center justify-content-between"
                        style={{
                          width: "100%",
                          backgroundColor: isMenuOpen
                            ? "#FFE9DE"
                            : "transparent",
                          borderRadius: "10px",
                        }}
                      >
                        <span>
                          <i className={`bi ${item.icon} me-2`}></i>
                          {item.label}
                        </span>
                      </button>

                      {/* Show sub-menu items if menu is open */}
                      {isMenuOpen && (
                        <div>
                          {item.subMenu.map((subItem, subIndex) => {
                            const isSubMenuOpen = openSubMenu === subItem.label;
                            return (
                              <div key={subIndex}>
                                {subItem.subMenu ? (
                                  <>
                                    {/* Trainee button (click to open) */}
                                    <button
                                      onClick={() =>
                                        toggleSubMenu(subItem.label)
                                      }
                                      className="list-group-item text-dark border-0 w-full d-flex align-items-center justify-content-between"
                                      style={{
                                        width: "100%",
                                        backgroundColor: isSubMenuOpen
                                          ? "#FFE9DE"
                                          : "transparent",
                                        borderRadius: "10px",
                                        marginLeft: "20px",
                                      }}
                                    >
                                      <span>
                                        <i
                                          className={`bi ${subItem.icon} me-2`}
                                        ></i>
                                        {subItem.label}
                                      </span>
                                    </button>

                                    {/* Show trainee sub-menu items */}
                                    {isSubMenuOpen &&
                                      subItem.subMenu.map(
                                        (nestedItem, nestedIndex) => (
                                          <Link
                                            key={nestedIndex}
                                            href={nestedItem.href}
                                            className="list-group-item text-dark border-0 w-full d-block"
                                            style={{
                                              fontSize: "14px",
                                              marginLeft: "40px",
                                            }}
                                          >
                                            <i
                                              className={`bi ${nestedItem.icon} me-2`}
                                            ></i>
                                            {nestedItem.label}
                                          </Link>
                                        )
                                      )}
                                  </>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className="list-group-item text-dark border-0 w-full d-block"
                                    style={{
                                      fontSize: "14px",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    <i
                                      className={`bi ${subItem.icon} me-2`}
                                    ></i>
                                    {subItem.label}
                                  </Link>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="list-group-item text-dark mt-2 border-0"
                      style={{
                        display: "block",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    >
                      <i className={`bi ${item.icon} me-2`}></i>
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Profile Section */}
        <div
          className="border d-flex align-items-center p-2"
          style={{
            position: "absolute",
            bottom: "20px",
            width: "90%",
            left: "5%",
            borderRadius: "10px",
          }}
        >
          <Image
            src="/profile.jpg"
            alt="User"
            height={40}
            width={40}
            className="rounded-circle"
          />
          <div className="ms-2">
            <p className="m-0" style={{ fontWeight: 500 }}>
              Michael Robinson
            </p>
            <p className="m-0" style={{ fontSize: "12px", color: "#888" }}>
              michael.robin@gmail.com
            </p>
          </div>
          <i className="bi bi-three-dots ms-auto"></i>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
