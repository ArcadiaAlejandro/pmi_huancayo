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
                    label: 'Sponsor 1',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Sponsor 2',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Sponsor 3',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Sponsor 4',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                }
            ]
        },
        {
            label: 'Junta Directiva',
            image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
            children: [
                {
                    label: 'Junta Directiva 1',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Junta Directiva 2',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Junta Directiva 3',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Junta Directiva 4',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Junta Directiva 5',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
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
                    label: 'Voluntario 1',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Voluntario 2',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Voluntario 3',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Voluntario 4',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Voluntario 5',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Voluntario 6',
                    image: 'https://via.placeholder.com/150', // Cambia esto por la URL de tu imagen
                },
                {
                    label: 'Voluntario 7',
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
