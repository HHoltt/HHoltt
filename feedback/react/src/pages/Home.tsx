// import products from "../data/product.json";
import { useEffect, useState } from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Archive as FileIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch("http://" + window.location.hostname + ":80/api/v2", { mode: "cors", method: "get" })
        .then(t => "json" in t ? t.json() : null)
        .then(t => setFiles(t));
    }, []);

    return (
        <List dense={true}>
        { files.map((f, i) => (
                <ListItem key={i} sx={{ cursor: "pointer" }} onClick={() => {
                    return navigate("/kit");
                }}>
                    <ListItemAvatar>
                        <Avatar>
                            <FileIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={f["name"]}></ListItemText>
                </ListItem>
        ) ) }
        </List>
    );
};

export default Home;
