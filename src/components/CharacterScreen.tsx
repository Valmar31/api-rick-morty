import React, { useState } from "react";
import { useQuery } from "react-query";
import { BtnRed, BtnSmall, DivCharacters, DivFlex, DivFlexRight } from "../styles/styles";
import Character from "./CharacterCard";

export default function Characters() {
    const [page, setPage] = useState(1);

    const fetchCharacters = async ({ queryKey }: any) => {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
        );
        return response.json();
    };

    const { data, status, isPreviousData } = useQuery(
        ["characters", page],
        fetchCharacters,
        {
            keepPreviousData: true,
        }
    );

    console.log(isPreviousData);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "error") {
        return <div>Error</div>;
    }

    return (
        <DivCharacters>
            {data.results.map((character: any) => (
                <Character character={character} />
            ))}

            <DivFlex>
                <button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>

                <BtnRed
                    onClick={() => setPage((old) => old + 1)}
                    disabled={true}

                >
                    Current {page}
                </BtnRed>

                <button
                    onClick={() => setPage((old) => old + 1)}
                    disabled={!data.info.next}
                >
                    Next
                </button>

                {/* </div> */}

                <DivFlexRight>
                    <BtnSmall
                        onClick={() => setPage((old) => (1))}

                    >
                        1
                    </BtnSmall>

                    <BtnSmall
                        onClick={() => setPage((old) => (data.info.pages) / 2)}

                    >
                        {(data.info.pages) / 2}
                    </BtnSmall>

                    <BtnSmall
                        onClick={() => setPage((old) => (data.info.pages))}

                    >
                        {(data.info.pages)}
                    </BtnSmall>
                </DivFlexRight>
            </DivFlex>
        </DivCharacters>
    );
}