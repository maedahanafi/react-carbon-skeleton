import React from "react";
import {
  Content,
  Button, Stack
} from "@carbon/react";
import "./index.scss";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Store } from "../../store/Store";

function Homepage() {
	//Enable user interaction with anotherObject
  const dispatch = useDispatch();
  const onClickButton = ()=>{
  	const payload = {anotherObject:"Another object!"};
    dispatch({
      type: "ADD_ANOTHER_OBJECT",
      payload: payload,
    });
  };

  // Retrieve anotherObject from Store
  const anotherObjectArr = useSelector((state) => {return state.object2.anotherObjectArr});

	return (
	  <Content>
	  		<Stack gap={6}>
		      <span>Content belongs here.</span>
		      <span className="helper-text helper-box">This font is the helper font</span>
		      <span>Another Object Arr: {JSON.stringify(anotherObjectArr)}</span>
		      <Button onClick={()=>{onClickButton()}} >
		        Add another object
		      </Button>
	      </Stack>
	  </Content>
  );  
};

export default Homepage;
