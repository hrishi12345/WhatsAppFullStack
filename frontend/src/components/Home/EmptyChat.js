import { Box ,Divider,Typography,styled} from "@mui/material"
import empty from './empty.jpg'
const EmptyChat=(props)=>{
    const Component=styled(Box)`
    background:#f9f9fa;
    padding:30px 0;
    text-align:center;
    height:100vh;`
    const Container=styled(Box)`
    padding:0 200px;
    `
    const Image=styled('img')({
        width:400,
        marginTop:100
    })
    const Title=styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;`
    const Subtitle=styled(Typography)`
    font-size:14px;
    
    font-family:inherit;
    font-weight:400;
    color:#667781;`

    const StyleDivider=styled(Divider)`
    margin:40px 0;
    opacity:0.4;`
    return(
        <Component>
            <Container>
                <Image src={empty} alt="empty" />
                <Title>WhatsApp Web</Title>
                <Subtitle>Now send and recieve messages without keeping your phone online</Subtitle>
                <Subtitle>Use whatsapp on up to 4 linked devices and 1 phone at same time</Subtitle>
                <StyleDivider />
            </Container>
        </Component>
    )
}
export default EmptyChat