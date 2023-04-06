// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../constants/paths";
import { useDispatch } from "react-redux";
import { notSubmitted, submitted, setNullUser, setLoginUser } from "../../redux/isLogin.reducers";
import axios from "axios";

export default function NotFoundPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://bid-my-ride-server.onrender.com/user/checkUser",
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then((res) => {
                if (mounted) {
                    if (res.data.status) {
                        dispatch(submitted());
                        dispatch(setLoginUser(res.data.user));
                        navigate(path.HOME);
                    } else {
                        dispatch(notSubmitted());
                        dispatch(setNullUser());
                        navigate(path.LOGIN);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            setMounted(false);
        };
    }, [dispatch, mounted, navigate]);

    return <div></div>;
}
