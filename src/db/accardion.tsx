import { useState } from "react";
import { Stack, Typography } from "@mui/material";

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
    <Stack flexDirection={'row'} justifyContent={"space-between"} gap={10} >

    <Stack gap={1}>
      {accordionData.slice(0,4).map(({ id, text, item }) => (
          <div className="accardion-container" key={id} onClick={() => accardionopen(id)}>
          <Stack>
            <Typography variant="h5" component={"h5"}>
              {item}
            </Typography>
            <Typography className={openAccordion === id ? "accardion" : "closeaccardion"}>{text}</Typography>
          </Stack>
        </div>
      ))}
    </Stack>

<Stack gap={1}>
    {accordionData.slice(4,8).map(({ id, text, item }) => (
        <div key={id} onClick={() => accardionopen(id)}>
          <Stack width={{ xs: "100%", md: "500px" }}>
            <Typography variant="h5" component={"h5"}>
                {item}
            </Typography>
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