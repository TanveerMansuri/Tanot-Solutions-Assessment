import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import type { BlogPost } from "@/components/sections/blog/blog-data";
import { cn } from "@/lib/utils";

export interface ModernBlogCardProps {
  post: BlogPost;
  className?: string;
}

export function ModernBlogCard({ post, className }: ModernBlogCardProps) {
  const { title, excerpt, category, imageSrc, imageAlt, publishedAt, author, href } = post;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[20px] bg-white text-left",
        "border border-[#D7E5DE] shadow-[0_4px_20px_rgba(18,60,58,0.04)]",
        "transition-all duration-300 hover:-translate-y-1.5 hover:border-[#267C6B] hover:shadow-[0_12px_32px_rgba(38,124,107,0.12)]",
        className
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7FAF7]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center rounded-full bg-[#267C6B] px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm select-none">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="text-[17px] sm:text-[18px] font-bold tracking-tight text-[#123C3A] leading-[1.3] transition-colors group-hover:text-[#267C6B]">
            <Link href={href} className="focus-visible:outline-none focus-visible:underline">
              {title}
            </Link>
          </h3>
          <p className="mt-2.5 text-[14px] sm:text-[14.5px] font-normal leading-[1.6] text-[#637773] line-clamp-3">
            {excerpt}
          </p>
        </div>

        <div className="mt-6 border-t border-[#D7E5DE] pt-4.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {author.avatarSrc ? (
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#D7E5DE]">
                <Image
                  src={author.avatarSrc}
                  alt={author.name}
                  fill
                  sizes="36px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDF5E8] text-[12px] font-bold text-[#123C3A]">
                {author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] font-bold text-[#123C3A] hover:underline">
                {author.name}
              </span>
              <time className="text-[11.5px] font-normal text-[#637773] mt-0.5">
                {publishedAt}
              </time>
            </div>
          </div>

          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#267C6B] transition-all hover:text-[#123C3A] group/link focus-visible:outline-none"
            aria-label={`Read article: ${title}`}
          >
            <span className="hover:underline">Read Article</span>
            <ArrowRight className="h-3.5 w-3.5 stroke-[2.4] transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
