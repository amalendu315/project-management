"use client";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  imageUrl: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  authorId,
  authorName,
  createdAt,
  id,
  imageUrl,
  isFavorite,
  orgId,
  title,
}: BoardCardProps) => {

    const { userId } = useAuth();

    const authorLabel = userId === authorId ? "You" : authorName;

    const createdAtLabel = formatDistanceToNow(createdAt,{
        addSuffix:true,
    });

  return (
     <Link href={`/board/${id}`}>
        <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
            <div className="relative flex-1 bg-amber-50">
                <Image 
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-fill"
                />
                <Overlay />
            </div>
            <Footer 
                isFavorite={isFavorite}
                title={title}
                authorLabel={authorLabel}
                createdAtLabel={createdAtLabel}
                onClick={()=>{}}
                disabled={false}
            />
        </div>
     </Link>
);
};

export default BoardCard;
