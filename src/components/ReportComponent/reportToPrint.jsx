import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ReportButton } from "./styles";

import ComponentToPrint from "./reportTable";

const ReportToPrint = ({ permission, users, mockUsers }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ReportButton onClick={handlePrint}>Imprimir</ReportButton>

      <ComponentToPrint
        ref={componentRef}
        permission={permission}
        users={users}
        mockUsers={mockUsers}
      />
    </div>
  );
};

export default ReportToPrint;
