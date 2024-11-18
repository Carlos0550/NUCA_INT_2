import { categorias } from "./categories.js";

export function addFilters() {
    return `
        <select id="filter__options">
            <option selected >Todos</option>
            ${categorias
                .map(
                    (category) =>
                        `<option value="${category.id}">${category.name}</option>`
                )
                .join("")}
        </select>
        <input id="filter__search" placeholder="¿Qué estás buscando?" />
    `;
}
