import React from "react";
import {
  Content,
  Button, Stack
} from "@carbon/react";
import "./index.scss";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Store } from "../../store/Store";
import { addAnotherObject, selectAnotherObjectArr, } from "../../store/anotherObjectReducer";

function Homepage() {
	//Enable user interaction with anotherObject
  const dispatch = useDispatch();
  const onClickButton = ()=>{
    dispatch(addAnotherObject({anotherObject:"Another object!"}));
  };

  // Retrieve anotherObject from Store
  const anotherObjectArr = useSelector((state) => selectAnotherObjectArr(state));

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
