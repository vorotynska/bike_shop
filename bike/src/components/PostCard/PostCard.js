import React from "react";
import { SubTitle, Text, Flex } from "../Ui/Ui";

function PostCard({image, title, text}) {
    return(
        <Flex direction='column' align="flex-start" fflex={1}>
            <img src={image} alt={title} />
            <SubTitle withBorder margin='30px 0'>{title}</SubTitle>
            <Text margin='0'>{text}</Text>
        </Flex>
    );
}
export default PostCard;