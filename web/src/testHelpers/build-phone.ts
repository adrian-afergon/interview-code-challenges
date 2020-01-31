import {Phone} from "../models/Phone";

export const buildPhone = ({
    id = 0,
    screen= 'irrelevant screen',
    color= 'irrelevant color',
    description= 'irrelevant description',
    imageFileName= 'irrelevant filename',
    manufacturer= "irrelevant manufacturer",
    name= "irrelevant name",
    price= 0,
    processor= "irrelevant processor",
    ram= 0
}: Partial<Phone>):Phone => ({
    screen,
    ram,
    processor,
    price,
    name,
    manufacturer,
    imageFileName,
    description,
    color,
    id
});
