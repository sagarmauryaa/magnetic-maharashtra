import { useState } from "react";
import { useRouter } from "next/navigation";
function FlyoutLink({ children, menuItem, menu, setisMenuOpen, isMenuOpen }) {
  const [activeIndex, setActiveIndex] = useState(null);
  let { push } = useRouter();
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMenu = (menu) => {
    const url = menu.startsWith("/") ? menu : `/${menu}`;
    push(url, { replace: true });
    setisMenuOpen(!isMenuOpen);
  };
  // ... existing code ...
  return (
    <div>
      <div
        onClick={() => toggleAccordion(menu)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {children}{" "}
        <span
          style={{
            display: "inline-block",
            transform: activeIndex === menu ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          {activeIndex === menu ? "−" : "+"}
        </span>{" "}
      </div>
      <div>
        {activeIndex == menu &&
          menuItem.map((menu, index) => (
            <a
              onClick={() => {
                handleMenu(menu.url);
              }}
              style={{
                fontSize: "14px",
                display: "inline-block",
                width: "100%",
              }}
              key={index}
            >
              {menu.label}
            </a>
          ))}
      </div>
    </div>
  );
}

export default FlyoutLink;
