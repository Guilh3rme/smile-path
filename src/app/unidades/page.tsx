import { BookOpenIcon } from "@heroicons/react/24/solid";

import React from "react";

const Unidades = () => {
  return (
    <div>
      <div className="flex border-black-900 border-b pb-2 mb-2">
        <BookOpenIcon className="w-5 h-5" />
        <p className="text-black ml-1">Unidades</p>
      </div>
      <p>Página de unidades.</p>
    </div>
  );
};

export default Unidades;
