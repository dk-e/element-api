import React, { useState, useEffect } from "react";
import { codeToHtml } from "shiki";
import clsx from "clsx";

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
    const [highlightedCode, setHighlightedCode] = useState("");

    useEffect(() => {
        const highlightCode = async () => {
            const html = await codeToHtml(code, {
                lang: language,
                theme: "rose-pine-moon",
            });
            setHighlightedCode(html);
        };
        highlightCode();
    }, [code, language]);


    return (
        <div className="relative p-4 rounded-lg bg-[#232136] text-white w-full max-w-4xl overflow-auto" style={{ height: "760px" }}>
            {" "}
            <div
                className="prose prose-invert break-words whitespace-pre-wrap overflow-x-auto h-full"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
        </div>
    );
};

export default function Examples() {
    const [selectedButton, setSelectedButton] = useState(0);

    const codeSamples = [
        // ik this is ugly
        `{
  "success": true,
  "message": "Successfully fetched element",
  "data": [
    {
      "atomicMass": 1.0079,
      "atomicNumber": 1,
      "atomicRadius": 37,
      "boilingPoint": 20,
      "bondingType": "diatomic",
      "cpkHexColor": "FFFFFF",
      "density": 0.0000899,
      "electronAffinity": -73,
      "electronegativity": 2.2,
      "electronicConfiguration": "1s¹",
      "groupBlock": "nonmetal",
      "ionizationEnergy": 1312,
      "ionRadius": null,
      "meltingPoint": 14,
      "name": "Hydrogen",
      "oxidationStates": [
        "-1",
        "1"
      ],
      "standardState": "gas",
      "symbol": "H",
      "vanDerWaalsRadius": 120,
      "yearDiscovered": "1766"
    }
  ]
}`,
        `{
  "success": true,
  "message": "Successfully fetched element",
  "data": {
    "atomicMass": 196.97,
    "atomicNumber": 79,
    "atomicRadius": 144,
    "boilingPoint": 3129,
    "bondingType": "metallic",
    "cpkHexColor": "FFD123",
    "density": 19.3,
    "electronAffinity": -223,
    "electronegativity": 2.54,
    "electronicConfiguration": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    "groupBlock": "transition metal",
    "ionizationEnergy": 890,
    "ionRadius": "137 (+1)",
    "meltingPoint": 1337,
    "name": "Gold",
    "oxidationStates": [
      "-1",
      "1",
      "2",
      "3",
      "5"
    ],
    "standardState": "solid",
    "symbol": "Au",
    "vanDerWaalsRadius": 166,
    "yearDiscovered": "Ancient"
  }
}`,
        `{
  "success": true,
  "message": "Successfully fetched element",
  "data": {
    "atomicMass": 10.811,
    "atomicNumber": 5,
    "atomicRadius": 82,
    "boilingPoint": 4273,
    "bondingType": "covalent network",
    "cpkHexColor": "FFB5B5",
    "density": 2.46,
    "electronAffinity": -27,
    "electronegativity": 2.04,
    "electronicConfiguration": "[He] 2s² 2p¹",
    "groupBlock": "metalloid",
    "ionizationEnergy": 801,
    "ionRadius": "27 (+3)",
    "meltingPoint": 2348,
    "name": "Boron",
    "oxidationStates": [
      "1",
      "2",
      "3"
    ],
    "standardState": "solid",
    "symbol": "B",
    "vanDerWaalsRadius": null,
    "yearDiscovered": "1807"
  }
}`,
    ];

    return (
        <div className="p-6">
            <div className="mb-6 flex flex-wrap gap-4 justify-center">
                {["Hydrogen", "Gold", "Boron"].map((exampleResponse, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedButton(index)}
                        className={clsx(
                            "rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                            { "border-gray-300 dark:border-neutral-700 ": selectedButton === index }
                        )}
                    >
                        {exampleResponse}
                    </button>
                ))}
            </div>
            <div className="flex justify-center">{selectedButton !== null && <CodeBlock code={codeSamples[selectedButton]} language="json" />}</div>
        </div>
    );
}
