"use client";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";
import Colors from "../colors";
// import { StyledButton } from "./styled/StyledButton";
export const StyledButton = styled.button`
  background: linear-gradient(${Colors.brand200}, ${Colors.brand500});
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  
  transition: background 0.5s, transform 0.3s;

  &:hover {
    background: linear-gradient(${Colors.brand500}, ${Colors.brand800});
    /* Add a subtle scale effect on hover */
    transform: scale(1.05);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in-out;
`;
const TopNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-end gap-5 px-5 items-center" style={{ width: "100%" }}>
      <div>
        <div
          onClick={() => router.push("/")}
          className={pathname === "/" ? "font-bold" : ""}
          style={{
            cursor: "pointer",
          }}
        >
          Product
        </div>
      </div>
      <div>
        <div
          onClick={() => router.push("/about")}
          className={pathname === "/about" ? "font-bold" : ""}
          style={{
            cursor: "pointer",
          }}
        >
          About
        </div>
      </div>
      <div>
        <div
          onClick={() => router.push("/pricing")}
          className={pathname === "/pricing" ? "font-bold" : ""}
          style={{
            cursor: "pointer",
          }}
        >
          Pricing
        </div>
      </div>
      <div>
        <div
          onClick={() => router.push("/contact")}
          className={pathname === "/contact" ? "font-bold" : ""}
          style={{
            cursor: "pointer",
          }}
        >
          Join Us
        </div>
      </div>
      <div>
        <StyledButton
          onClick={() => router.push("/dashboard")}
          className={pathname === "/contact" ? "active" : ""}
        >
          Request a Demo
        </StyledButton>
      </div>
    </div>
  );
};

export default TopNav;
