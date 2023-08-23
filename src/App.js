import React from "react";
import logo from "./assets/logo";
import { BiCommentDetail, BiListCheck } from "react-icons/bi";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { styled } from "styled-components";

const MenuButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  transition: 0.12s all ease-in-out;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color:#273AB5
  }
`;


const SearchInput = styled.input`
  width: calc(100vw - 20%);
  
  &:focus {
    outline: none;
  }
  `;


function App() {

  const menuItems = [
    {
      title: "Öneri Talepleri",
      icon: <BiCommentDetail size={35} />,
    },
    {
      title: "Kabul Edilen Öneriler",
      icon: <BiListCheck size={35} />,
    },
    {
      title: "Silinen Öneriler",
      icon: <MdOutlinePlaylistRemove size={35} />,
    }
  ]

  return (
    <div style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
    }}>
      <div style={{
        width: "20%",
        backgroundColor: "#273AB5",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <div style={{ height: "100px", display: "flex", alignItems: "center", paddingTop: "10px" }}>
          <img src={logo} alt="logo" width={"100%"} height={"80px"} />
          {/* <span>KPI Library</span> */}
        </div>
        <div style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 50,
        }}>
          <div style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}>
            {menuItems.map((item, index) => {
              return (
                <MenuButton>
                  {item.icon}
                  <span style={{
                    fontSize: 18,
                    fontFamily: "Poppins, sans-serif",
                  }}>{item.title}</span>
                </MenuButton>
              )
            })}
          </div>
        </div>

      </div>
      <div style={{
        width: "80%",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{
          height: "50px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
        }}>
         
        </div>
        <div style={{
        }}>
        </div>
      </div>
    </div>
  );
}

export default App;
