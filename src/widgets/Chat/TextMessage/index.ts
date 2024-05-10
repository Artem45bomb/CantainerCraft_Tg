export function typeOfTextMessage(type: string) {
  let partOfClass: string =
    "inline-block bg-fff010 rounded-1.5xl ml-2 p-2 select-auto";
  if (type == "top") return partOfClass + "rounded-bl";
  else if (type == "middle") return partOfClass + "rounded-l";
  else if (type == "bottom") return partOfClass + "rounded-tl";
}
