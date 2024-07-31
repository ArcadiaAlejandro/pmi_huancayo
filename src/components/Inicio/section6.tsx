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
                <img src={node.image} alt={node.label} className="w-8 h-8 rounded-full border-2 border-gray-300" />
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
                    image: 'data:image/jpeg;base64,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', // Cambia esto por la URL de tu imagen
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
                        { label: 'Claudia Margarita, Ortega Castillo', image: 'https://via.placeholder.com/150' }, 
                    ] 
                },
            ]
        },
    

                         /* Manera de agregar otros hijos
                label: 'Sponsor 2.1',
                image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                    children: [
                        { label: 'Sponsor 2.1.1', image: 'https://via.placeholder.com/150' },
                        { label: 'Sponsor 2.1.2', image: 'https://via.placeholder.com/150' },
                        { label: 'Sponsor 2.1.3', image: 'https://via.placeholder.com/150' }
                    ] 
        */
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
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Yulysa Liv, Hinojo Camayo',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
            ]
        }
    ]
};

const Section6: React.FC = () => {
    return (
        <div className="flex p-4">
            {/* Lado izquierdo */}
            <div className="flex-1 p-2 flex items-center justify-center">
                {/* Aquí puedes colocar el contenido del lado izquierdo */}
                <Tree data={data} />
            </div>
            {/* Lado derecho */}
            <div className="flex-1 p-2 flex items-center justify-center">
                {/* Aquí puedes colocar el contenido del lado derecho */}
                <img src={Voluntarios} alt=""  className="max-w-full h-96 "/>
                {/* Puedes añadir otro componente o contenido aquí */}
            </div>
        </div>
    );
};

export default Section6;
