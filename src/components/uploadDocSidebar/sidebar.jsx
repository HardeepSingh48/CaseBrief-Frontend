import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import upload from "../../assets/svgs/upload.svg";
import UploadButton from "./blueButton";
import DocumentListItem from "./upload-doc-list-item";
import { SearchBar } from "../sidebar/search-bar";
import AuthAxios from "../../utils/Authaxios";

export function Sidebar({ activeDocId, docs, onDocSelect, handlePdfText }) {
  const navigate = useNavigate();
  const [filteredDocs, setFilteredDocs] = useState(docs);

  const f = async () => {
    try {
      const res = await AuthAxios.get("/doc");
      setFilteredDocs(res.data.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  }

  useEffect(() => {
    f();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredDocs(docs);
      return;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = docs.filter((doc) =>
      doc.summary.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredDocs(filtered);
  };

  return (
    <div className="w-[400px] h-[100vh] dark:bg-PrimaryGrayDark bg-TertiaryWhite overflow-hidden">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <h1 className="dark:text-gray-200 text-DarkBlue font-semibold">
            Your Documents
          </h1>
        </div>
      </div>

      <div className="px-4 pt-3 flex justify-center items-center flex-col gap-2">
        <UploadButton
          name="Upload Document"
          svg={upload}
          handleText={handlePdfText}
        />
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex-1 overflow-y-auto pl-5 max-h-[75vh] min-h-[70vh] overflow-auto">
        {filteredDocs &&
          filteredDocs.length > 0 &&
          filteredDocs.map((doc) => (
            <DocumentListItem
              key={doc.documentId}
              title={doc.summary}
              isActive={doc.documentId === activeDocId}
              onClick={() => {
                navigate(`/upload/${doc.documentId}`);
                onDocSelect(doc.documentId);
              }}
            />
          ))}
      </div>
    </div>
  );
}