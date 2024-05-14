import React from "react";
import PaperTags from "./papertags";

function ResearchItem() {
    return (
        <div className="mb-2">
            <ul className="list-disc ml-5">
                <li className="mb-2">
                    <h1 className="text-base font-medium tracking-tighter">
                        Machine Learning-based surrogate modeling framework for
                        predicting the history-dependent deformation of dual
                        phase microstructures
                    </h1>
                    <h2>
                        <span className="italic">Sarthak Khandelwal</span>,
                        Soudip Basu, Anirban Patra
                    </h2>
                    <h2 className="font-medium">
                        Materials Today Communications 2021
                    </h2>
                    <PaperTags
                        abstract={
                            <p>
                                A Machine Learning (ML)-based surrogate modeling
                                framework is developed to predict the
                                heterogeneous deformation behavior of dual phase
                                microstructures. The deformation is first
                                simulated using a dislocation density-based J
                                <sub>2</sub> plasticity Finite Element (FE)
                                model, whose results form the basis for
                                surrogate model training and validation. Long
                                Short Term Memory (LSTM)-based ML models, with
                                different architectures, are employed to predict
                                the spatio-temporal evolution of three output
                                variables: effective strain, von Mises effective
                                stress, and the stress triaxiality ratio. Two
                                metrics, the mean average error (MAE) and the
                                coefficient of determination, R<sup>2</sup>, are
                                used to assess the performance of the models and
                                different architectures. Based on our analysis,
                                the LSTM model is generally found to predict the
                                spatio-temporal deformation fields with
                                reasonable accuracy, even for untrained
                                microstructures with varying microstructural
                                attributes and random instantiations. The LSTM
                                model is also used to predict aggregate
                                properties, such as the stress strain response
                                and the strain partitioning in the dual phase
                                microstructures.
                            </p>
                        }
                        code="https://github.com/apatra6/DualPhaseDeformationLSTM"
                        link="https://doi.org/10.1016/j.mtcomm.2021.102914"
                        pdf="/research/undergrad-thesis-paper.pdf"
                    />
                </li>
                <li>
                    <h1 className="text-base font-medium tracking-tighter">
                        &rho;-CP: Open source dislocation density based crystal
                        plasticity framework for simulating temperature-and
                        strain rate-dependent deformation
                    </h1>
                    <h2>
                        Anirban Patra, Suketa Chaudhary, Namit Pai, Tarakram
                        Ramgopal,{" "}
                        <span className="italic">Sarthak Khandelwal</span>,
                        Adwitiya Rao, David L. McDowell
                    </h2>
                    <h2 className="font-medium">
                        Computational Materials Science 2023
                    </h2>
                    <PaperTags
                        abstract={
                            <p>
                                This work presents an open source, dislocation
                                density based crystal plasticity modeling
                                framework, &rho;-CP. A Kocks-type thermally
                                activated flow is used for accounting for the
                                temperature and strain rate effects on the
                                crystallographic shearing rate. Slip
                                system-level mobile and immobile dislocation
                                densities, as well slip system-level backstress,
                                are used as internal state variables for
                                representing the substructure evolution during
                                plastic deformation. A fully implicit numerical
                                integration scheme is presented for the time
                                integration of the finite deformation plasticity
                                model. The framework is implemented and
                                integrated with the open source finite element
                                solver, Multiphysics Object-Oriented Simulation
                                Environment (MOOSE). Example applications of the
                                model are demonstrated for predicting the
                                anisotropic mechanical response of single and
                                polycrystalline hcp magnesium, strain rate
                                effects and cyclic deformation of
                                polycrystalline fcc OFHC copper, and temperature
                                and strain rate effects on the deformation of
                                polycrystalline bcc tantalum. Simulations of
                                realistic Voronoi-tessellated microstructures as
                                well as Electron Back Scatter Diffraction (EBSD)
                                microstructures are demonstrated to highlight
                                the model's ability to predict large deformation
                                and misorientation development during plastic
                                deformation.
                            </p>
                        }
                        code="https://github.com/apatra6/rhocp"
                        link="https://doi.org/10.48550/arXiv.2303.02441"
                        pdf="/research/moose-c-code.pdf"
                    />
                </li>
            </ul>
        </div>
    );
}

export default ResearchItem;
