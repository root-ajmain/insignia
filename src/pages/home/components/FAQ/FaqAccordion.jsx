import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./Styles.module.css";
import { useEffect } from "react";
import axios from "../../../../api/axios";
import { useState } from "react";

const FaqAccordion = () => {
  const [selectedFaq, setSelectedFaq] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axios.get("/faq?isSelected=true");

        setSelectedFaq(data?.data);
      } catch ({ response }) {
        // console.log(response);
      }
    };

    handleData();
  }, []);

  return (
    <div className="w-full">
      <Accordion
        className="border border-brand__gray__border rounded-xl p-6 backdrop-blur-xl"
        preExpanded={[1]}
      >
        {selectedFaq?.slice(0, 6).map((item, index) => (
          <AccordionItem uuid={index + 1} key={item?.id}>
            <AccordionItemHeading
              className={`text-white ${
                index !== 5 && "border-b"
              } border-brand__gray__border py-3 text-brand__font__size__base font-brand__font__semibold`}
            >
              <AccordionItemButton className={styles.accordion__button}>
                {item?.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="text-white py-3 pl-5 animate-fade__in text-brand__font__size__sm">
              {item?.answer.slice(0, 250)}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
