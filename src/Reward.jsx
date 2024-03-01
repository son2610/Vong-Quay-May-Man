import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
// import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

const DialogDemo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const reward = localStorage.getItem("reward");

    const [open, setOpen] = useState(false);
    const postGoogleForm = async (data) => {
        console.log(data);
        const formURL = import.meta.env.VITE_FORM_URL;
        const postName = import.meta.env.VITE_ENTRY_NAME;
        const postEmail = import.meta.env.VITE_ENTRY_MAIL;
        const postPhone = import.meta.env.VITE_ENTRY_PHONE;
        const postReward = import.meta.env.VITE_ENTRY_REWARD;
        console.log(postEmail, postPhone);
        const formData = new FormData();
        formData.append(postName, data.name);
        formData.append(postEmail, data.email);
        formData.append(postPhone, data.phone);
        formData.append(postReward, data.rewardData);
        try {
            await fetch(formURL, {
                method: "POST",
                body: formData,
            });
        } catch (error) {
            console.log("Loi : ", error.message);
        }
    };

    const onSubmitForm = (data) => {
        const data2 = { ...data, rewardData: reward };
        // console.log(data2);
        postGoogleForm(data2);
        reset();

        setOpen(false);
    };
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="text-violet11 text-4xl shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-pink-300 px-[95px] py-14 font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none animate-bounce">
                    Nhận Thưởng
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Chúc mừng bạn đã trúng <span>{reward}</span> !!!
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        Hãy đảm bảo bạn nhập đúng thông tin liên hệ. Chúng tôi
                        sẽ sớm liên lạc với bạn
                    </Dialog.Description>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="text-violet11 w-[90px] text-right text-[15px]"
                                htmlFor="name"
                            >
                                Tên
                            </label>
                            <input
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                id="name"
                                placeholder="Nhập tên zo đây nè!"
                                {...register("name")}
                            />
                        </fieldset>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="text-violet11 w-[90px] text-right text-[15px]"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                id="email"
                                placeholder="cute@phomaique.com"
                                {...register("email")}
                            />
                        </fieldset>
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <label
                                className="text-violet11 w-[90px] text-right text-[15px]"
                                htmlFor="phone"
                            >
                                Phone:
                            </label>
                            <input
                                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                                id="phone"
                                placeholder="0991234567"
                                {...register("phone")}
                            />
                        </fieldset>
                        <div className="mt-[25px] flex justify-end">
                            {/* <Dialog.Close asChild> */}
                            <button
                                type="submit"
                                className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                            >
                                Send Me Gift
                            </button>
                            {/* </Dialog.Close> */}
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                                type="button"
                            >
                                {/* <Cross2Icon /> */}X
                            </button>
                        </Dialog.Close>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DialogDemo;
