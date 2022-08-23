import { useNavigate } from "react-router-dom";
import Characters from '../components/CharacterScreen';

import { AContainer, DivApp, DivContainer, DivFlex } from "../styles/styles";
import { FiExternalLink } from "react-icons/fi";

export function Home() {
    const navigate = useNavigate();

    function navigateToNewRoom() {
        navigate('/About');
    }

    return (
        <DivApp>
            <DivContainer>
                <button>
                    Rick and Morty!
                </button>

                <button
                    // onClick={navigateToNewRoom}
                    disabled={true}
                >
                    About Me!
                </button>

                <AContainer>
                    <a
                        href="https://rickandmortyapi.com/api/character"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <DivFlex>
                            <h1> Rick and Morty API</h1>
                            <FiExternalLink
                                style={{
                                    position: 'relative',
                                    left: '15px',
                                }}
                                size="60px"
                                color="white"
                            />
                        </DivFlex>
                    </a>
                </AContainer>

                <Characters />

            </DivContainer>
        </DivApp>
    )
}