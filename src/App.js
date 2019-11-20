import React from "react";
// import FlashSale from "./Components/Flash_Sale/FlashSale";

import { BookPopular } from "./Components/Book_Popular/Book_Popular";

// import { BookPopular } from "./Components/Book_Popular/Book_Popular";
// import { Choicebrand } from "./Components/Choice_Brand/Choice_Brand";
// import { EditorChoice } from "./Components/Editor_Choice/EditorChoice";
// import { Blog } from "./Components/Blog/blog";
import { Profile } from "./Components/Profile/Profile";


const App = () => {
  return (
    <div>

      {/* <FlashSale /> */}
      <BookPopular />

      {/* <FlashSale />
      <Choicebrand />
      <EditorChoice /> */}
      {/* <Blog /> */}
      <Profile />

    </div>
  );
};

export default App;
