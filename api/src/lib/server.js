import express from "express";
import { getConfig } from "./config.js";

export const startServer = () => {
    const httpServer = express();
    const port = getConfig().port; // 透過函數動態取得

    try {
        httpServer.listen(port, () => {
            console.log(`Server running on port ${port}`)
        });
    } catch (err) {
        throw new Error(err);
    }
};
