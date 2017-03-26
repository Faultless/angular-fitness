import { Category } from 'app/categories/category';
import { MuscleGroup } from "app/muscle-groups/muscle-group";

export type Exercise = {
    name: string;
    category: Category;
    muscleGroups: MuscleGroup[];
    demoVideo: string;
};