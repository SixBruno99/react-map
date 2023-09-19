import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

export default function SearchBox() {
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Box display='flex' alignItems='center' margin='auto' height="64px" width='50%'>
                <Input w="100%" placeholder='Pesquisar...' />
                <Button ml={5}>
                    Pesquisar
                </Button>
            </Box>
        </div>
    );
}