import { useEffect } from "react";

declare global {
  interface Window {
    indexedDB: IDBFactory;
    mozIndexedDB?: IDBFactory;
    webkitIndexedDB?: IDBFactory;
    msIndexedDB?: IDBFactory;
    webkitIDBTransaction?: IDBTransaction;
    msIDBTransaction?: IDBTransaction;
    webkitIDBKeyRange?: IDBKeyRange;
    msIDBKeyRange?: IDBKeyRange;
  }
}

function useIDB() {
  useEffect(() => {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"};

    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  }, []);
}

export default useIDB;
