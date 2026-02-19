// This Provider:
import { Children } from "react";
import NoticeComponent from "./NoticeComponent";

const Univerity = ({children}) => {

    const notice = "Tommrow we have a class";

  return (
    <NoticeComponent.Provider value={{notice}}>
        {children}
    </NoticeComponent.Provider>
  )
}

export default Univerity