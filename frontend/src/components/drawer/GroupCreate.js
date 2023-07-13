import { Box, Button, styled, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { createGroup } from "../../service/api";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  background: #00000099;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Input = styled("input")({
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }

  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const GroupInfo = () => {
  const [groupName, setGroupName] = useState("");
  const {account}=useContext(AccountContext)

  const groupHandler = async () => {
      const GroupInfo={
        groupName:groupName,
        admin:account.sub,

      }
     const data=await createGroup(GroupInfo)
     console.log(data)

  };

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  return (
    <>
      <ImageContainer>
        <Input type="file" />
      </ImageContainer>
      <BoxWrapper>
        <TextField
          id="name"
          label="Enter Group Name"
          variant="standard"
          value={groupName}
          onChange={handleGroupNameChange}
        />
      </BoxWrapper>
      <Button onClick={groupHandler}>Submit</Button>
    </>
  );
};

export default GroupInfo;
