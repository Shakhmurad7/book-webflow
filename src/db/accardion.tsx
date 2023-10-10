import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

interface AccordionItem {
  id: string;
  item: string;
  text: string;
}

function AccordionComponent() {
  const accordionData: AccordionItem[] = [
    {
      id: "1",
      item: "Do you offer discounts for education?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "2",
      item: "Is Hack Productivity book available in stores?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "3",
      item: "What is Hack Productivity book about?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "4",
      item: "Where can I get Hack Productivity book",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "5",
      item: "Do you offer discounts for education?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "6",
      item: "Is Hack Productivity book available in stores?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "7",
      item: "Do you offer discounts for education?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },
    {
      id: "8",
      item: "Where can I get Hack Productivity book?",
      text:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.",
    },

  ];

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const accardionopen = (id: string | null) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <>
    <Stack flexDirection={{xs:"column" , sm:'row'}} justifyContent={"space-between"} gap={10} >

    <Stack gap={2}>
      {accordionData.slice(0,4).map(({ id, text, item }) => (
          <div style={{ padding:'10px' , boxShadow:` rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`}} className="accardion-container" key={id} onClick={() => accardionopen(id)}>
          <Stack>
          <Stack flexDirection={'row'} gap={2} alignItems={"center"}>
              <Box>{openAccordion===id? <img src={'./Imge/Ellipse 16.svg'}/>: <img src={'./Imge/Ellipse 16 (1).svg'}/> }</Box>
            <Typography sx={{cursor:"pointer"}} variant="h5" fontSize={{xs:'22px' , md:'24px'}} component={"h5"}>
                {item}
            </Typography>
            </Stack>
            <Typography className={openAccordion === id ? "accardion" : "closeaccardion"}>{text}</Typography>
          </Stack>
        </div>
      ))}
    </Stack>

<Stack gap={2} >
    {accordionData.slice(4,8).map(({ id, text, item }) => (
        <div style={{ padding:'10px' , boxShadow:` rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px`}} key={id} onClick={() => accardionopen(id)}>
          <Stack width={{ xs: "100%", md: "500px" }}>
            <Stack flexDirection={'row'} gap={2} alignItems={"center"}>
              <Box>{openAccordion===id? <img src={'./Imge/Ellipse 16.svg'}/>: <img src={'./Imge/Ellipse 16 (1).svg'}/> }</Box>
            <Typography sx={{cursor:"pointer"}}  fontSize={{xs:'22px' , md:'24px'}} variant="h5" component={"h5"}>
                {item}
            </Typography>
            </Stack>
            <Typography className={openAccordion === id ? "accardion" : "closeaccardion"}>{text}</Typography>
          </Stack>
        </div>
      ))}
    </Stack>
    </Stack>
      </>
    
  );
}

export default AccordionComponent;