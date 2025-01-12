import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className={'min-h-dvh flex flex-col gap-4 justify-center items-center'}>
                <p>
                    اینجا خود سایت بیاد
                </p>
                <Button variant="primary">
                    <Link href={'/login'}>
                        ورود
                    </Link>
                </Button>
            </div>
        </>
    )
        ;
}
