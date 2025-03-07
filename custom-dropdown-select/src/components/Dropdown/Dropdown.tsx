import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.scss";

interface Option {
  label: string;
  value: string;
  icon?: string;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
}) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {selected ? (
          <>
            {selected.icon && (
              <span className={styles.icon}>{selected.icon}</span>
            )}
            {selected.label}
          </>
        ) : (
          placeholder
        )}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
          &#9662;
        </span>
      </div>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${
                selected?.value === option.value ? styles.selectedOption : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <div>
                {option.icon && (
                  <span className={styles.icon}>{option.icon}</span>
                )}
                {option.label}
              </div>
              <div>
                {selected?.value === option.value && (
                  <span className={styles.check}>&#10003;</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
