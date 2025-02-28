export interface FAQItemType {
    id: number;
    question: string;
    answer: string;
  }
  
  export interface FAQItemProps {
    item: FAQItemType;
    isExpanded: boolean;
    onToggle: () => void;
  }
  