import React, { useState } from 'react';
import Voluntarios from '../../assets/img/gift/Voluntarios.gif';

// Definir la interfaz para los nodos del árbol
interface TreeNodeData {
    label: string;
    image: string;
    children?: TreeNodeData[];
}

// Definir los props para el componente TreeNode
interface TreeNodeProps {
    node: TreeNodeData;
    expandedNodes: Set<string>;
    onToggleExpand: (id: string) => void;
    id: string;
}

// Componente para un nodo del árbol
const TreeNode: React.FC<TreeNodeProps> = ({ node, expandedNodes, onToggleExpand, id }) => {
    const isExpanded = expandedNodes.has(id);

    const handleToggle = () => {
        onToggleExpand(id);
    };

    return (
        <div className="flex flex-col ml-4 text-zinc-500 ">
            <div className={`flex items-center gap-2 p-2 rounded ${isExpanded ? 'bg-[#4e17a018]' : ' hover:bg-[#4e17a00f]'}`}>
                {node.children && node.children.length > 0 && (
                    <button
                        onClick={handleToggle}
                        className="text-[#06BADB] hover:text-[#ff630f]"
                    >
                        {isExpanded ? '-' : '+'}
                    </button>
                )}
                <img src={node.image} alt={node.label} className="w-8 h-8 rounded-full border-2 border-gray-300 object-cover" />
                <span>{node.label}</span>
            </div>
            {isExpanded && node.children && (
                <div className="ml-4">
                    {node.children.map((child, index) => (
                        <TreeNode
                            key={`${id}-${index}`}
                            node={child}
                            expandedNodes={expandedNodes}
                            onToggleExpand={onToggleExpand}
                            id={`${id}-${index}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Definir los props para el componente Tree
interface TreeProps {
    data: TreeNodeData;
}

// Componente principal del árbol
const Tree: React.FC<TreeProps> = ({ data }) => {
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

    const handleToggleExpand = (id: string) => {
        setExpandedNodes(prev => {
            const newExpandedNodes = new Set(prev);
            if (newExpandedNodes.has(id)) {
                newExpandedNodes.delete(id);
            } else {
                newExpandedNodes.add(id);
            }
            return newExpandedNodes;
        });
    };

    const handleExpandAll = () => {
        const collectIds = (node: TreeNodeData, parentId: string): string[] => {
            let ids = [parentId];
            if (node.children) {
                node.children.forEach((child, index) => {
                    ids = ids.concat(collectIds(child, `${parentId}-${index}`));
                });
            }
            return ids;
        };
        setExpandedNodes(new Set(collectIds(data, 'root')));
    };

    const handleCollapseAll = () => {
        setExpandedNodes(new Set());
    };

    return (
        <div>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-[#4D17A0]'>Nuestro Equipo</h1>
            <div className="mb-4">
                <button
                    onClick={handleExpandAll}
                    className="bg-[#06BADB] text-white px-4 py-2 rounded mr-2"
                >
                    Ver lista completa de Voluntarios
                </button>
                <button
                    onClick={handleCollapseAll}
                    className="bg-[#ff630f] text-white px-4 py-2 rounded"
                >
                    Cerrar Lista de Voluntarios
                </button>
            </div>
            <TreeNode
                node={data}
                expandedNodes={expandedNodes}
                onToggleExpand={handleToggleExpand}
                id="root"
            />
        </div>
    );
};

// Datos de ejemplo
const data: TreeNodeData = {
    label: 'Equipo del PMI Lima Perú Chapter: Edicion Huancayo',
    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
    children: [
        {
            label: 'Sponsors',
            image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
            children: [
                {
                    label: 'Ruben Dario, Arzapalo Bello',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Rodolfo Antonio, Chavez Castillo',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
            ]
        },
        {
            label: 'Junta Directiva',
            image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
            children: [
                {
                    label: 'Alejandro Antonio, De La Cruz Charun',
                    image: 'https://media.licdn.com/dms/image/C4D03AQFEHEkbg2egyw/profile-displayphoto-shrink_200_200/0/1647982756708?e=1727913600&v=beta&t=ZAXNKBpBxFzmGrz51M1xRY_PyWWVeLafrXuPXFoQggs', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Yadira Lizbeth, Agüero Arzapalo',
                    image: '', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Pamela Lucia, Ricra Huaman ',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
            ]
        },
        {
            label: 'Directores',
            image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
            children: [
                {
                    label: 'Director de Proyectos',
                    image: 'https://via.placeholder.com/150',
                    children: [
                        { label: 'Carlos Andre, Puertas Chirio', image: 'https://via.placeholder.com/150' }, 
                    ] 
                },
                {
                    label: 'Director de Talento Humano',
                    image: 'https://via.placeholder.com/150', 
                    children: [
                        { label: 'DIRECTOR 1', image: 'https://via.placeholder.com/150' }, 
                    ] 
                },
                {
                    label: 'Director de Membresías y certificaciones ',
                    image: 'https://via.placeholder.com/150',
                    children: [
                        { label: 'Jennifer Misshel, Guerra Palomino', image: 'https://via.placeholder.com/150' }, 
                    ] 
                },
                {
                    label: 'Director de Marketing ',
                    image: 'https://via.placeholder.com/150',
                    children: [
                        { label: 'Claudia Margarita, Ortega Castillo', image: 'https://photos.fife.usercontent.google.com/pw/AP1GczND5K7IhrPsnve7y8Zrq3EST2UXck4DmF4qartStNML4UPmsBSeqAJW=w165-h220-no?authuser=5' }, 
                    ] 
                },
            ]
        },
        {
            label: 'Voluntarios',
            image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
            children: [
                {
                    label: 'Samuel Guillermo, Santos Falcón ',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Estefany Nicol, Sotacuro Quispe ',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Antonio Wilfredo, Cahuana Vicuña ',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Flabia Antonela, Torres Arroyo ',
                    image: 'https://photos.google.com/u/5/photo/AF1QipPFaaPKamN-Z4niodOD_iTt-ks8kDHO5pDihnXZ', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Yulysa Liv, Hinojo Camayo',
                    image: 'https://photos.google.com/u/5/photo/AF1QipPmC1B6kC8hAF08Bh3oWVWyVu95p11rUVgS52jD', // Cambia esto por la URL de tu imagen
                },
            ]
        }
    ]
};

const Section6: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row p-4">
            {/* Lado izquierdo */}
            <div className="flex-1 p-2 flex items-center justify-center">
                <Tree data={data} />
            </div>
            {/* Lado derecho */}
            <div className="flex-1 p-2 flex items-center justify-center">
                <img src={Voluntarios} alt="Voluntarios" className="max-w-full max-h-96 object-cover" />
            </div>
        </div>
    );
};

export default Section6;
