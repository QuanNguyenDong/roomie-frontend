import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
    const [user, setUser] = useState({});

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get(global.route + `/users/profile`, {
                withCredentials: true,
            });
            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser || !storedUser.answers) {
            fetchUserProfile();
        } else {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className="max-w-[500px] h-full px-7 mx-auto text-black font-lexend">
            <div className="flex flex-col items-center justify-center">
                <span className="inline-flex items-center justify-center size-[99px] rounded-full bg-darkGrey text-lg font-semibold text-white leading-none">
                    <p className="text-3xl">
                        {user.fullname
                            ?.split(" ")
                            .map((word) => word[0])
                            .join("")}
                    </p>
                </span>
                <p className="mt-4 mb-1 text-3xl font-bold">
                    {user.fullname}
                </p>
                <h4>{user.email ?? "abc@gmail.com"}</h4>
                <button className="my-6 bg-white text-xs text-darkGrey w-28 h-10 rounded-3xl drop-shadow-lg">
                    Your Reviews
                </button>
            </div>
            <div className="my-6">
                <p className="font-bold mb-2">A little bit about myself...</p>
                <p>{user.desc}</p>
            </div>
            <div>
                <p className="font-bold">Func facts about me</p>
                {Array.from(user.answers ?? {}).map((answer, i) => (
                    <div key={i} className="p-6 my-6 bg-white border border-gray-200 rounded-lg shadow">
                        <p className="font-bold">{answer.question}</p>
                        <p>{answer.answer}</p>
                    </div>
                ))}
            </div>
            <div className="h-40"></div>
        </div>
    );
}

export default Profile;