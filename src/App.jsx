import "./App.css";
// import { handler } from "tailwindcss-animate";
import { useEffect, useRef, useState } from "react";
import { cn } from "./lib/utils";
import Reward from "./Reward";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

function App() {
    const { toast } = useToast();
    const spinnerRef = useRef();
    const circleRef = useRef();
    const [isSpined, setIsSpined] = useState(false);

    let countReward;
    const checkReward = async () => {
        const res = await fetch(
            "https://script.google.com/macros/s/AKfycbyWWuikCb40NVOx1g66eisbJPD72IzS4-4ljkc39QRHRCINOPuyIxMge8GVwNCm5GdAtw/exec"
        );
        const data = await res.json();
        return (countReward = data.data);
    };
    useEffect(() => {
        const spined = localStorage.getItem("spined");
        console.log(spined);
        checkReward();
        console.log(countReward);
        if (spined) {
            console.log("here");
            toast({
                variant: "destructive",
                title: "Oops!",
                description: "Bạn chỉ có 1 lần quay duy nhất thôi nè !!!",
                action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                ),
            });
            setIsSpined(true);
        }
    }, []);

    // console.log(isSpined);
    const handlerSpinner = () => {
        const ramdom = Math.floor(Math.random() * 100);
        console.log(ramdom);

        console.log(isSpined);
        let reward = "May mắn lần sau ❤";
        if (countReward < 5 && ramdom >= 0 && ramdom < 5) {
            circleRef.current?.classList?.add("rotate-[1133deg]");
            reward = "Macbook";
        } else if (ramdom > 5 && ramdom <= 25) {
            circleRef.current?.classList?.add("rotate-[1200deg]");
            reward = "100$";
        } else if (ramdom > 25 && ramdom <= 45) {
            circleRef.current?.classList?.add("rotate-[1436deg]");
            reward = "200$";
        } else if (ramdom > 45 && ramdom <= 55) {
            circleRef.current?.classList?.add("rotate-[1322deg]");
            reward = "300$";
        } else if (ramdom > 55 && ramdom <= 75) {
            circleRef.current?.classList?.add("rotate-[1260deg]");
            reward = "500$";
        } else {
            circleRef.current?.classList?.add("rotate-[1370deg]");
        }
        setTimeout(() => {
            localStorage.setItem("spined", true);
            localStorage.setItem("reward", reward);

            setIsSpined(true);
        }, 5500);
    };
    console.log(spinnerRef, circleRef);
    return (
        <>
            <div className="w-dvw h-dvh">
                <div className="relative flex items-center justify-center w-full h-full bg-[url('./background.png')] bg-cover">
                    <img
                        src="./circle.png"
                        ref={circleRef}
                        className={cn(
                            "absolute w-[80%] duration-[5000] duration-5000 lg:w-[50%]"
                        )}
                    />
                    <img
                        src="./spiner.png"
                        ref={spinnerRef}
                        className={cn(
                            "absolute w-[10%] animate-ZoomOut cursor-pointer",
                            isSpined && "cursor-not-allowed pointer-events-none"
                        )}
                        onClick={() => {
                            handlerSpinner();
                        }}
                    />
                    <div className={cn("absolute", !isSpined && "hidden")}>
                        <Reward />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
