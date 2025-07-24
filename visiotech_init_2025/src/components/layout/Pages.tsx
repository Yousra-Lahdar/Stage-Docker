
import {Box} from "@mui/material";
import {Helmet} from "react-helmet-async";
import type {ReactNode} from "react";

type PagesProps = {
    children: ReactNode;
    title: string;
};

const Pages = ({children, title}: PagesProps) => {
    return (
        <Box ml="110px" mt="64px">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </Box>
    );
};

export default Pages;

