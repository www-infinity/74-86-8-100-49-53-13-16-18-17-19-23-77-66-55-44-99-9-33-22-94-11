import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hea-recipe',
    title: 'HEA Master Recipe',
    subtitle: 'High-Entropy Alloy Combinatorial Design',
    description:
      'A systematic combinatorial approach to designing multi-principal-element alloys with tunable mechanical, magnetic, and thermal properties. Leverages CALPHAD thermodynamics and ML-guided composition optimization to accelerate the discovery of novel HEA phases.',
    category: 'hea',
    heroElements: ['Fe', 'Co', 'Ni', 'Cr', 'Ti', 'W', 'Al'],
    difficulty: 'research',
    tags: ['CALPHAD', 'Machine Learning', 'Combinatorial', 'Additive Manufacturing'],
    gradient: 'linear-gradient(135deg, #0a0f1e 0%, #1a1040 50%, #0d1a2e 100%)',
  },
  {
    id: 'universal-shield',
    title: 'FGM Universal Shield',
    subtitle: 'Functionally Graded Multi-Layer Armor',
    description:
      'A three-layer functionally graded material system engineered for simultaneous lightweight structural performance and extreme heat/radiation shielding. The composition gradient transitions continuously from a lightweight Al-Ti outer skin to a refractory W-Ta-Re inner barrier.',
    category: 'fgm',
    heroElements: ['Al', 'Ti', 'W', 'Ir'],
    difficulty: 'prototype',
    tags: ['FGM', 'Armor', 'Thermal Barrier', 'Additive Manufacturing'],
    gradient: 'linear-gradient(135deg, #0d1a2e 0%, #0a2040 50%, #1a0d2e 100%)',
  },
  {
    id: 'radiation-tile',
    title: 'Deep-Space Radiation Tile',
    subtitle: 'CubeSat Solar Flare Shielding System',
    description:
      'A compact multi-material tile engineered to protect CubeSat electronics from high-energy solar proton events and galactic cosmic rays. Integrates an aluminium structural frame with a tungsten gamma-ray foil and iridium ignition-resistant fasteners.',
    category: 'product',
    heroElements: ['Al', 'W', 'Ir'],
    difficulty: 'prototype',
    tags: ['Space', 'Radiation', 'CubeSat', 'Gamma Shielding'],
    gradient: 'linear-gradient(135deg, #050a14 0%, #0f1525 50%, #080f1e 100%)',
  },
  {
    id: 'smart-bone',
    title: 'Smart Bone Bio-Implant',
    subtitle: 'Ti-V Alloy with Impedance Sensing',
    description:
      'A biocompatible titanium-vanadium alloy orthopedic screw featuring indium surface doping for real-time impedance-based osseointegration monitoring. Enables wireless feedback to a paired tablet app, tracking bone healing progress post-surgery.',
    category: 'product',
    heroElements: ['Ti', 'V', 'In'],
    difficulty: 'research',
    tags: ['Biomedical', 'Implant', 'IoT', 'Ti-6Al-4V'],
    gradient: 'linear-gradient(135deg, #0a1a14 0%, #0f2820 50%, #0a1414 100%)',
  },
  {
    id: 'sensor-housing',
    title: 'CMOS Sensor Housing',
    subtitle: 'Extreme Environment Corrosion-Proof Enclosure',
    description:
      'A hardened sensor housing designed for volcano monitoring and deep-sea deployment, where simultaneous exposure to sulfuric acid and high-salinity brine would destroy conventional materials. Ruthenium coating and PTFE fluoropolymer gaskets ensure zero-maintenance sealing.',
    category: 'product',
    heroElements: ['Ru', 'F', 'S', 'Na', 'Cl'],
    difficulty: 'prototype',
    tags: ['Corrosion', 'Deep-Sea', 'Volcano', 'PTFE', 'Sensor'],
    gradient: 'linear-gradient(135deg, #0a1400 0%, #141e00 50%, #0f1a05 100%)',
  },
  {
    id: 'rtg-heatsink',
    title: 'RTG Nuclear Heat Sink',
    subtitle: 'Radioisotope Thermoelectric Generator Thermal Management',
    description:
      'A passive heat-sink system for Pu-238 RTG power sources used in deep-space probes. Caesium borosilicate glass manages radial thermal gradients while dysprosium alloy fins exploit magnetocaloric effects for directional heat flow, all contained in a tungsten radiation vessel.',
    category: 'product',
    heroElements: ['Pu', 'Cs', 'Dy', 'W'],
    difficulty: 'theoretical',
    tags: ['RTG', 'Nuclear', 'Deep Space', 'Thermoelectric', 'Pu-238'],
    gradient: 'linear-gradient(135deg, #140a00 0%, #1e1000 50%, #180c00 100%)',
  },
];

export const projectMap = new Map<string, Project>(
  projects.map((p) => [p.id, p])
);
